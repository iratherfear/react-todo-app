export default function ResetButton({resetMethod}) {

    function resetFunction() {
        resetMethod()
    }

    return (
        <div className="resetButton">
            <button className="reset" onClick={resetFunction}>
                RESET
            </button>
        </div>
    )
}