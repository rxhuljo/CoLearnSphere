from flask import Flask , request , jsonify
from supabase import create_client
from flask_cors import CORS
import bcrypt

SUPABASE_URL = "https://jitbfugbhgkphobivjho.supabase.co"
SUPABASE_SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdGJmdWdiaGdrcGhvYml2amhvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzMxNTQwOSwiZXhwIjoyMDU4ODkxNDA5fQ.9dlxkY2p2j6lBvpHyVr44EK2JBYwzCVcPw12OM3dHFU"


supabase = create_client(SUPABASE_URL, SUPABASE_SECRET_KEY)

app = Flask(__name__)

CORS(app, supports_credentials=True)


@app.route('/community', methods=['POST'])
def get_community():
    response = supabase.table("community").select("*").execute()
    return jsonify(response.data), 200

@app.route('/addcom', methods=['POST'])
def add_comm():
    data = request.get_json()
    supabase.table('community').insert({"name": data.get("username"), "content": data.get("content")}).execute()
    return jsonify({"message": "Success"}), 200

@app.route('/modules', methods=["POST"])
def get_modules():
    response = supabase.table("modules").select("*").execute()
    return jsonify(response.data), 200

@app.route('/addmodules', methods=['POST'])
def add_modules():
    data = request.get_json()
    supabase.table('modules').insert({"name": data.get("modulename"), "desc": data.get("desc")}).execute()
    return jsonify({"message": "Success"}), 200

@app.route('/register', methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    college = data.get("college")
    phone = data.get("phone")

    existing_user = supabase.table("Users").select("id").eq("email", email).execute()
    if existing_user.data:
        return jsonify({"message": "User already exists"}), 400
    
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    response = supabase.table("Users").insert({
        "username": username, 
        "password": hashed_password, 
        "College": college, 
        "phone": phone, 
        "email": email
    }).execute()

    # Fetch the user ID after insertion
    user_id = supabase.table("Users").select("id").eq("email", email).execute().data[0]["id"]
    return jsonify({"message": "User registered successfully", "id": user_id}), 200

if __name__ == "__main__":
    app.run(debug=True)
