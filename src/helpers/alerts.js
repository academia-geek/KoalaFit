import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const updatedAlert = () => {
    MySwal.fire({
      icon: "success",
      title: "Updated!",
    });
  }


export {
    updatedAlert
}