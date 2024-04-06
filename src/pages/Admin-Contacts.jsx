import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const { authorizationToken,BaseUrl } = useAuth();

  const [contactData, setContactData] = useState([]);

  const getContactsData = async () => {
    try {
      const response = await fetch(
        `${BaseUrl}/api/admin/contacts`,

        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("contact data :", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `${BaseUrl}/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getContactsData();
        toast.success("Deleted Successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      {contactData.map((curContact, index) => {
        // const { username, email, message, _id } = contactData;

        return (
          <>
            <div key={index}>
              <p>{curContact.username}</p>
              <p>{curContact.email}</p>
              <p>{curContact.message}</p>
              <button onClick={() => deleteContactById(curContact._id)}>Delete</button>
            </div>
          </>
        );
      })}
    </>
  );
};
