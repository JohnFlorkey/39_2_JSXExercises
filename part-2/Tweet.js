const Tweet = ({ username, fullName, message }) => (
    <div>
        <h3>{username}</h3>
        <h5>{fullName}</h5>
        <p>{message}</p>
    </div>
);