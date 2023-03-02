import {Chair, DomainVerification, Home, PieChart, Summarize} from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
const sideBardata=[{
    icon:<Home/>,
    iconname:"Dashboard",
    path :"/dashboard",
    submenu:false
},
{
    icon:<PersonIcon/>,
    iconname:"User",
    path :"/user",
    submenu:false
},
{
    icon:<PieChart />,
    iconname:"Reports",
    // submenu:true,
    // subdata:[
    //     {
    //         subiconname:"Attendance"
    //     },
    //     {
    //         subiconname:"Hours Tracked"
    //     },
    //     {
    //         subiconname:"Timeline"
    //     },
    //     {
    //         subiconname:"Employee Logs"
    //     }
    // ]
    path:"/worktimereport"
},{
    icon:<Chair/>,
    iconname:"Holidays",
    submenu:false,
    path:"/holidaylist"

},{
    icon:<DomainVerification/>,
    iconname:"Leave",
    submenu:false,
    path:"/leavepage"
},
// {
//     icon:<Summarize/>,
//     iconname:"Summary",
//     submenu:false,
//     path:"/summarypage"
// }
];



export default sideBardata ;
