import {  useNavigate } from "react-router-dom";
import { dashboard_links } from "../utils";

function Dashboard() {
    
  const navigate = useNavigate();
  function navigete1(path) {
    return navigate(path);
  }
  return (
    
    <div className="mt-[50px] items-center justify-center flex flex-col text-black">
      <div className="pt-4">
        {dashboard_links.map((value) => (
            <div key={value.id} onClick={() => navigete1(value.path)}>
           <button className="button">{value.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
