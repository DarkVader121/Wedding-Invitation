import { logoutUser } from "../services/auth";

const ManageImages = () => {

    const handleLogout = async () => {
        const { error } = await logoutUser();

        if (error) {
            alert(error.message);
            return;
        }

        window.location.href = "/login";
    };

    return (
        <section>
            <div className="container">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </section>
    );
};

export default ManageImages;