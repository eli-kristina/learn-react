import TopNav from "../components/navbar/TopNav";
import BottomNav from "../components/navbar/BottomNav";

function App() {
  return (
    <div className="container-scroller">
    	<div className="horizontal-menu">
    		<TopNav/>
    		<BottomNav/>
    	</div>
    </div>
  );
}

export default App;
