//styles
import '../style/dashboard.css'

//Components
import Sidebar from '../components/sidebar/Sidebar.jsx'

function Dashboard() {
    return (
        <>
            <div className='admin-view'>
                <Sidebar/>
                <h1>Admin Root</h1>
            </div>
        </>
    )
}

export default Dashboard