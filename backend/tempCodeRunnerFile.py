@app.route("/messages/<module_id>", methods=["GET"])
def get_messages(module_id):
    try:
        response = supabase.table("chat_messages").select("*").eq("module_id", module_id).execute()
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500