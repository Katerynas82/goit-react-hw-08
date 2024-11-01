import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectIsError } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";

const Contacts = () => {
   const isLoading = useSelector(selectIsLoading);
   const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="formWrapper">
      <h1> Phone Book </h1>
      <ContactForm />

      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}

      <ContactList />
    </div>
  );
};

export default Contacts;
