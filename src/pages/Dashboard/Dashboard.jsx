import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const Dashboard = ({event}) => {

    const {_id,name, catagory, date, time, duration, image,venue,address1} = event;
        
        const handleDelete = _id => {
          console.log(_id);
          Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   
     fetch(`http://localhost:5000/event/${_id}`,{
        method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if ( data.deletedCount > 0){
                 Swal.fire({
      title: "Deleted!",
      text: "Your event has been deleted.",
      icon: "success"
    });
        }
     })
  }
});
        }
    return (
        <div>
           <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Category</th>
        <th>Event Date</th>
        <th>Time</th>
        <th>Duration</th>
        <th>Venue</th>
        <th>Address</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
           {catagory}
        </td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{duration}</td>
        <td>{venue}</td>
        <td>{address1}</td>
        <th>
          <button
           onClick={() => handleDelete(_id)}
           className="btn bg-red-400"><MdDeleteForever /></button>
        </th>
      </tr>
    
    </tbody>
    
   
  </table>
</div>
            </div>  
        </div>
    );
};

export default Dashboard;