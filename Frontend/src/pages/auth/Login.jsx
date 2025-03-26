import Layout from "../../components/layout/Layout"

const Login = () => {
    return (
        <Layout>
            <div className="custom-padding flex flex-col flex-wrap justify-center items-center space-y-4 mx-auto my-24">
                <h1 className="text-4xl text-green-600">Login as ?</h1>
                <div className="flex gap-4">
                    <a href="/user/login">
                        <div className="flex flex-col items-center hover:bg-gray-100 py-10 px-16 rounded-xl border-4 border-green-500">
                            <img src="https://img.icons8.com/?size=100&id=23264&format=png&color=40C057" alt="User" />
                            <h6 className="text-green-500 font-semibold">Individual</h6>
                        </div>
                    </a>
                    <a href="/company/login">
                        <div className="flex flex-col items-center hover:bg-gray-100 py-10 px-16 rounded-xl border-4 border-green-500">
                            <img src="https://img.icons8.com/?size=100&id=103840&format=png&color=40C057" alt="Comapany" />
                            <h6 className="text-green-500 font-semibold">Company</h6>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default Login
