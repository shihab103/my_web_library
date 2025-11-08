import { useEffect, useState } from "react";

export default function Schedule() {
//   const [search, setSearch] = useState("");
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/getSchedule")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setScheduleData(data);
      });
  }, []);

  return (
    <div className="px-20 mt-10">
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Day</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Time</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {scheduleData.map((data) => (
              <tr
                key={data.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-4">{data.title}</td>
                <td className="py-3 px-4">{data.day}</td>
                <td className="py-3 px-4">{data.date}</td>
                <td className="py-3 px-4">{data.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
