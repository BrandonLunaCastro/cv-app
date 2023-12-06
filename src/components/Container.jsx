import UserInformation from "./UserInformation";
import { Resume } from "./Resume";

const Container = () => {
  return (
    <section className="container">
      <UserInformation />
      <Resume />
    </section>
  );
};

export default Container;
