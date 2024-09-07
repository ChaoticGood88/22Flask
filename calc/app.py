from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

# Map operation names to the corresponding functions
operations = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}

@app.route('/math/<operation>')
def do_math(operation):
    """Perform the requested math operation."""
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))

    # Retrieve the function from the operations dictionary
    if operation in operations:
        result = operations[operation](a, b)
        return str(result)
    else:
        return "Invalid operation", 400

if __name__ == '__main__':
    app.run(debug=True)
