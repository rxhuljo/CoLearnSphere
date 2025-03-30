from flask import Flask , request , jsonify
from supabase import create_client
from flask_cors import CORS

SUPABASE_URL = "https://jitbfugbhgkphobivjho.supabase.co"
SUPABASE_SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdGJmdWdiaGdrcGhvYml2amhvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzMxNTQwOSwiZXhwIjoyMDU4ODkxNDA5fQ.9dlxkY2p2j6lBvpHyVr44EK2JBYwzCVcPw12OM3dHFU"

supabase = create_client(SUPABASE_URL, SUPABASE_SECRET_KEY)

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Allow all origins dynamically

@app.after_request
def add_cors_headers(response):
    origin = request.headers.get("Origin")  # Get the actual origin
    if origin:
        response.headers["Access-Control-Allow-Origin"] = origin  # Allow the request origin
    response.headers["Access-Control-Allow-Credentials"] = "true"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    return response


@app.route('/login', methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    response = supabase.table("Users").select("*").execute()
    users = response.data
    if users:
        for user in users:
            if user["email"] == email:
                if user['password'] == password:
                    return jsonify({"message" : "User Login successfull"}) , 200
        return jsonify({"message" : "Login authentication failed"}) , 400
    

@app.route('/community' , methods = ['POST'])
def get_community():
    response = supabase.table("community").select("*").execute()
    data = response.data
    return data
@app.route('/addcom', methods = ['POST'])
def add_comm():
    data = request.get_json()
    supabase.table('community').insert({"name" : data.get("username") , "content" : data.get("content")})
    return jsonify("Success") , 200

@app.route('/modules',methods = ["POST"])
def get_modules():
    response = supabase.table("modules").select("*").execute()
    data = response.data
    return data
@app.route('/addmodules', methods = ['POST'])
def add_modules():
    data = request.get_json()
    supabase.table('modules').insert({"name" : data.get("modulename") , "desc" : data.get("desc")})
    return jsonify("Success") , 200

@app.route('/register', methods=["POST"])
def register():
    response = supabase.table("Users").select("username").execute()
    users = response.data
    data  = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    college = data.get("college")
    phone = data.get("phone")

    for user in users:
        if user["username"] == username:
            return jsonify({"message" : "User already exists"}) , 400
    supabase.table("Users").insert({"username" : username , "password" : password , "college" : college , "phone" : phone , "email" : email}).execute()
    return jsonify({"message" : "User registered successfully"})  , 200



if __name__ == "__main__":
    app.run(debug=True)