import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error

# Load data
data = pd.read_csv('./machinelearning/Data-Copy1.csv')

if "Unnamed: 0" in data.columns:
    data.drop(columns=["Unnamed: 0"], inplace=True)

# Define semester labels
semester_labels = [f"SEM-{i}" for i in range(2, 9)]

# Feature Engineering
data['Avg_SGPA'] = data.iloc[:, :-2].mean(axis=1)
data['SGPA_Improvement'] = data.iloc[:, 1:-2].subtract(data.iloc[:, :-3].values).mean(axis=1)
data['SGPA_Difference'] = data.iloc[:, -3] - data.iloc[:, 0]

# Split data dynamically
x_train_test = {}
y_train_test = {}
scalers = {}
mlp_models = {}

for i in range(2, 9):
    predictors = semester_labels[: i - 1] + ["Avg_SGPA", "SGPA_Improvement", "SGPA_Difference"]
    target = f"SEM-{i}"
    
    x = data[predictors]
    y = data[target]

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=2)
    x_train_test[target] = (x_train, x_test)
    y_train_test[target] = (y_train, y_test)

    # Standardization
    scaler = StandardScaler()
    x_train_scaled = scaler.fit_transform(x_train)
    x_test_scaled = scaler.transform(x_test)
    scalers[target] = scaler

    # Train model
    model = MLPRegressor(hidden_layer_sizes=(64, 32), activation='relu', solver='adam', max_iter=1000, random_state=2)
    model.fit(x_train_scaled, y_train)
    mlp_models[target] = model


def evaluate_model(sem_label):
    """Returns evaluation metrics for a given semester"""
    if sem_label not in mlp_models:
        return {"error": "Invalid semester"}
    
    x_test_scaled = scalers[sem_label].transform(x_train_test[sem_label][1])
    y_test = y_train_test[sem_label][1]
    model = mlp_models[sem_label]

    y_pred = model.predict(x_test_scaled)
    
    return {
        "MAE": round(mean_absolute_error(y_test, y_pred), 4),
        "MSE": round(mean_squared_error(y_test, y_pred), 4),
        "R2": round(model.score(x_test_scaled, y_test), 4),
    }


def predict_sgpa(semester, prev_sgpa):
    """Predicts SGPA for a given semester based on previous SGPA values"""
    if semester not in range(2, 9):
        return {"error": "Invalid semester. Choose between 2-8."}
    
    target = f"SEM-{semester}"
    predictors = semester_labels[: semester - 1] + ["Avg_SGPA", "SGPA_Improvement", "SGPA_Difference"]

    # Compute derived features
    avg_sgpa = np.mean(prev_sgpa)
    sgpa_improvement = np.mean(np.diff(prev_sgpa)) if len(prev_sgpa) > 1 else 0
    sgpa_difference = prev_sgpa[-1] - prev_sgpa[0] if len(prev_sgpa) > 1 else 0
    
    new_input_extended = np.array(prev_sgpa + [avg_sgpa, sgpa_improvement, sgpa_difference]).reshape(1, -1)

    # Standardize and Predict
    new_input_scaled = scalers[target].transform(new_input_extended)
    prediction = mlp_models[target].predict(new_input_scaled)

    return {"Predicted_SGPA": round(prediction[0], 2)}
