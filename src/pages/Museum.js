import { useEffect, useState } from "react";

const Museum = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/departments?limit=10"
    )
      .then((response) => response.json())
      .then((data) => setDepartments(data.departments));
  }, []);

  return (
    <div className="museum-container">
      <strong>Here are the world art museums:</strong>
      <br />
      <br />
      <ul className="museum-list">
        {departments.map((department) => (
          <li key={department.departmentId}>{department.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Museum;
