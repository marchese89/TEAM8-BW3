import papa from "../assets/papa.webp";

const ProfileVisited = () => {
  return (
    <div className="rounded-pill my-3 mx-2 d-flex profilePill ">
      <img
        src={papa}
        alt="imgProfile"
        width={40}
        height={40}
        className="rounded-5 mx-2"
      />
      <section className="sectionProfile">
        <h5 className="m-0">Name</h5>
        <p className="m-0">Lavoro</p>
      </section>
    </div>
  );
};

export default ProfileVisited;
