from flask import Flask, request, jsonify
from supabase import create_client
from flask_cors import CORS
import bcrypt

SUPABASE_URL = "https://jitbfugbhgkphobivjho.supabase.co"
SUPABASE_SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppdGJmdWdiaGdrcGhvYml2amhvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzMxNTQwOSwiZXhwIjoyMDU4ODkxNDA5fQ.9dlxkY2p2j6lBvpHyVr44EK2JBYwzCVcPw12OM3dHFU"

supabase = create_client(SUPABASE_URL, SUPABASE_SECRET_KEY)

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/community', methods=['GET'])  
def get_community():
    response = supabase.table("community").select("*").execute()
    return jsonify(response.data), 200

@app.route('/joinmodules', methods = ['POST' , "GET"])
def join_modules():
    user_id = request.args.get("userId")
    mod_id = request.args.get("modId")
    supabase.table("joined_modules").insert({
        "user_id" : user_id,
        "module_id" : mod_id
    }).execute()
    return jsonify({"message" : "Successfully joined Session"}) , 200

@app.route('/modules', methods=["POST","GET"])
def get_modules():
    user_id = request.args.get("userId")  
    if not user_id:
        return jsonify({"error": "Missing userId"}), 400

    response = supabase.table("modules").select("*").neq("id", user_id).execute()
    for i in response.data:
        id = i["mod_host"]
        host = supabase.table("Users").select("username").eq("id",id).execute()
        i["host_name"] = host.data[0]["username"]
    return jsonify({"sessions": response.data or []}), 200

@app.route('/addmodules', methods=['POST'])
def add_modules():
    data = request.get_json()
    moduleName = data.get("sessionName")
    userId = data.get("userid")
    loc = data.get("location")
    desc = data.get("description")

    # Insert the new module
    response = supabase.table('modules').insert({
        "mod_name": moduleName,
        "mod_desc": desc,
        "mod_host": userId,
        "location": loc
    }).execute()

    # Fetch the last inserted module ID using filters
    fetch_response = supabase.table("modules")\
        .select("id")\
        .eq("mod_name", moduleName)\
        .eq("mod_host", userId)\
        .order("id", desc=True)\
        .limit(1)\
        .execute()

    if not fetch_response.data:
        return jsonify({"error": "Failed to retrieve module ID"}), 500

    moduleId = fetch_response.data[0]["id"]

    # Insert into joined_modules
    supabase.table("joined_modules").insert({
        "user_id": userId,
        "module_id": moduleId
    }).execute()

    return jsonify({"message": "Session created successfully"}), 200



@app.route("/login", methods=['POST'])
def login():
    data = request.get_json()
    
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    user_data = supabase.table("Users").select("id, password").eq("email", email).execute()
    
    if not user_data.data:
        return jsonify({"message": "User not found"}), 404  

    user = user_data.data[0]  
    stored_password = user["password"]
    if not bcrypt.checkpw(password.encode('utf-8'), stored_password.encode('utf-8')):
        return jsonify({"message": "Invalid password"}), 401

    return jsonify({"message": "Login successful", "id": user["id"]}), 200

@app.route('/addcom', methods=['POST'])
def add_comm():
    data = request.get_json()
    user_id = int(data.get("userId"))
    content = data.get("content")
    print(data)

    if not user_id or not content:
        return jsonify({"message": "User ID and content are required"}), 400
    #print("User id from req : ",user_id," Type : ",type(user_id))
    user_data = supabase.table("Users").select("username").eq("id", int(user_id)).execute()
    
    if not user_data.data:
        
        return jsonify({"message": "User not found"}), 404

    username = user_data.data[0]["username"]

    response = supabase.table("community").insert({"name": username, "content": content}).execute()
    
    if response.data:
        
        return jsonify({"message": "Post added successfully"}), 200
    else:
        return jsonify({"message": "Failed to add post"}), 500


@app.route('/register', methods=["POST"])
def register():
    data = request.get_json()
    required_fields = ["username", "email", "password", "college", "phone"]

    if not all(field in data and data[field] for field in required_fields):
        return jsonify({"message": "All fields are required"}), 400

    username, email, password, college, phone = (
        data["username"], data["email"], data["password"], data["college"], data["phone"]
    )

    existing_user = supabase.table("Users").select("id").eq("email", email).execute()
    if existing_user.data:
        return jsonify({"message": "User already exists"}), 400

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    supabase.table("Users").insert({
        "username": username, 
        "password": hashed_password, 
        "College": college, 
        "phone": phone, 
        "email": email
    }).execute()

    user_id = supabase.table("Users").select("id").eq("email", email).execute().data[0]["id"]
    return jsonify({"message": "User registered successfully", "id": user_id}), 200

@app.route("/joinedmodules", methods=["POST", "GET"])
def getjoinedmodules():
    user_id = request.args.get("userId")

    if not user_id:
        return jsonify({"error": "userId is required"}), 400  # Return 400 if userId is missing

    try:
        response = supabase.table("joined_modules").select("module_id").eq("user_id", user_id).execute()
        
        modules = [record["module_id"] for record in response.data]  # Extract module IDs
        print(modules);
        return jsonify({"message": "Fetched successfully", "modules": modules}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500 


@app.route("/joinedsessions", methods=["POST", "GET"])
def getjoinedsessions():
    user_id = request.args.get("userId")

    if not user_id:
        return jsonify({"error": "Missing userId"}), 400

    try:
        # Fetch module IDs the user has joined
        response = supabase.table("joined_modules").select("module_id").eq("user_id", user_id).execute()
        modules = [record["module_id"] for record in response.data]  # Extract module IDs

        if not modules:
            return jsonify({"message": "No joined modules found", "modules": []}), 200

        # Fetch module details from "modules" table for the given module IDs
        module_details_response = supabase.table("modules").select("*").in_("id", modules).execute()
        module_details = module_details_response.data

        # Retrieve and add the host's username to each module
        for module in module_details:
            host_id = module["mod_host"]
            host_response = supabase.table("Users").select("username").eq("id", host_id).execute()
            
            # Ensure we get valid data before accessing index
            if host_response.data:
                module["host_name"] = host_response.data[0]["username"]
            else:
                module["host_name"] = "Unknown Host"  # Fallback in case no data is found

        print(f"Fetched joined modules for user {user_id}: {module_details}")  # Debugging log

        return jsonify({"message": "Fetched successfully", "modules": module_details}), 200

    except Exception as e:
        print(f"Error fetching joined sessions for user {user_id}: {str(e)}")
        return jsonify({"error": "Internal Server Error", "details": str(e)}), 500


@app.route("/userdetails", methods=["GET"])
def getUserDetails():
    user_id = request.args.get("userId")

    if not user_id:
        return jsonify({"error": "Missing userId"}), 400  # Return 400 if userId is missing

    try:
        # Fetch user details from Users table
        response = supabase.table("Users").select("*").eq("id", user_id).limit(1).execute()
        
        # Check if the user exists
        if not response.data:
            return jsonify({"error": "User not found"}), 404

        return jsonify({"message": "Fetched successfully", "user": response.data[0]}), 200

    except Exception as e:
        print(f"Error fetching user details for user {user_id}: {str(e)}")  # Log error
        return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

    
if __name__ == "__main__":
    app.run(debug=True)
