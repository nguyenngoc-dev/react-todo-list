import Search from "./Search";
import Sort from "./Sort";
function Control() {
    return(
        <div className="row mt-15" style = {{marginBottom: 20}}>
            <Search />
            <Sort />
        </div>
    )
}
export default Control;