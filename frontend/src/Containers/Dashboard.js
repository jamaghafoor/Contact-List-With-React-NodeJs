import { useLocation } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation";
import RegistrationModal from "../components/RegistrationModal";
import TabelHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import { BASE_URL, widthPercentage } from "../utils";
import { useEffect, useState } from "react";
import { getContactsAPI, getCurrentUserAPI } from "../APIs";
import axios from "axios";

function Dashboard() {
  const location = useLocation();
  const user = location?.state?.userData;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () =>{
      try {
        const response = await axios.get(`${BASE_URL}user/current`, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        });
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [])
  

  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
  ];

  return (
    <div className="App">
      {/* Main Container */}
      <div
        style={{
          width: widthPercentage(80),
        }}
        className="container"
      >
        <RegistrationModal setOpen={setOpen} open={open} />
        <TabelHeader setOpen={setOpen} />
        {people.map((person, index) => (
          <TableRow person={person} index={index}/>
        ))}

        <BottomNavigation></BottomNavigation>
      </div>
    </div>
  );
}

export default Dashboard;
