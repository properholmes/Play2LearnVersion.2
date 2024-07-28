function TextInput() {
    return(
        <div>
            <form id="ana-form">
                <div id="selection-operation">
                    <label htmlFor="word-length">Word Length</label>
                    <input type="number" id="word-length" placeholder=""></input>
                </div>
            </form>
        </div>
    );
};

export default TextInput;