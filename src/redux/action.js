import { GET, GET_HOLIDAY, GET_LEAVE } from "./type";
import { api } from "../baseurl";
// import toast from "react-hot-toast";

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token = localStorage.getItem('user');
const config = {
    headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
    },
}

// ............user............

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const res = await api.get('user', config)
            const user = res.data.data;
            console.log("uuuuuuuuuu", user);
            console.log("status.......", res.status);

            dispatch({
                type: GET,
                payload: user
            })
            // const page = res.data.page;
          
            return res.data.data;
        } catch (error) {
            console.log("error===", error);
            toast.error(error.message);
        }
    }

}

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            console.log("id---------", id);
            console.log("config====", config);
            const delete_res = await api.delete(`user/${id}`, config
            )
            dispatch(fetchUsers());
            console.log("delete api==", delete_res);
            console.log("delete api==", delete_res.data.message);

            if (delete_res.status === 200) {

                toast.success('Delete successfully !')

            }


        } catch (error) {
            toast.success(error.message);
            console.log("error===", error);
        }
    }
}

export const addUser = ({ payload }) => {
    return async (dispatch) => {
        try {
            console.log("payload.....", payload);
            console.log("config====", config);
            const insert_res = await api.post('user', payload, config,
                { headers: { 'Content-Type': 'application/json' } },
            )
            dispatch(fetchUsers());

            console.log("insert api==", insert_res);
            console.log("message api==", insert_res.data.message);
            // alert(insert_res.data.message);
            toast.success(insert_res.data.message);

        } catch (error) {
            toast.error(error.insert_res.data.message);
            console.log(error.insert_res.data.message);
        }
    }
}


export const updateItem = (id) => {
    return async (dispatch) => {
        try {
            const update_res = await api.put(`user/${id._id}`, id, config,
                { headers: { 'Content-Type': 'application/json' } },
            )

            dispatch(fetchUsers());
            toast.success(update_res.data.message);
            // alert(update_res.data.message);

        } catch (error) {
            toast.error( error.insert_res.data.message);
            console.log(error);
        }
    }
}

// ..............Holiday............

export const fetchUsersHoliday = () => {
    return async (dispatch) => {
        try {
            const res = await api.get('holiday', config)
            const holiday = res.data.data;
            console.log("Holiday ======", holiday);

            dispatch({
                type: GET_HOLIDAY,
                payload: holiday
            })
            // const page = res.data.page;
            return holiday;
        } catch (error) {
            console.log("error===", error);
            toast.error(error.message);
        }
    }

}

export const deleteHoliday = (id) => {
    return async (dispatch) => {
        try {

            const delete_res = await api.delete(`holiday/${id}`, config
            )
            dispatch(fetchUsersHoliday());
            console.log("delete api==", delete_res);
            toast.success(delete_res.data.message);

        } catch (error) {
            toast.error(error.message);
            console.log("error===", error);
        }
    }
}

export const addHoliday = ({ payload }) => {
    return async (dispatch) => {
        try {
            console.log("payload.....", payload);
            console.log("config====", config);
            const insert_res = await api.post('holiday', payload, config,
                { headers: { 'Content-Type': 'application/json' } },
            )
            dispatch(fetchUsersHoliday());

            console.log("insert api==", insert_res);
            console.log("message api==", insert_res.data.message);
            toast.success(insert_res.data.message);

        } catch (error) {
            toast.error(error.insert_res.data.message);
            console.log(error.insert_res.data.message);
        }
    }
}

export const updateHoliday = (id) => {
    return async (dispatch) => {
        try {
            const update_res = await api.put(`holiday/${id._id}`, id, config,
                { headers: { 'Content-Type': 'application/json' } },
            )

            dispatch(fetchUsersHoliday());
            toast.success(update_res.data.message);

        } catch (error) {
            // toast.success( error.insert_res.data.message);
            console.log(error);
        }
    }
}

// ..............leave............

export const fetchUsersLeaves = () => {
    return async (dispatch) => {
        try {
            const res = await api.get('leave', config)
            const leave = res.data.data;
            console.log("leave ======", leave);

            dispatch({
                type: GET_LEAVE,
                payload: leave
            })
            // const page = res.data.page;
            return leave;
        } catch (error) {
            console.log("error===", error);
            toast.error(error.message);
        }
    }

}

export const deleteLeave = (id) => {
    return async (dispatch) => {
        try {

            const delete_res = await api.delete(`leave/${id}`, config
            )
            dispatch(fetchUsersLeaves());
            // console.log("delete api==", delete_res);
            // toast.success(delete_res.data.message);
            console.log("status...",delete_res.status);
            if (delete_res.status === 200) {
                toast.success('Delete successfully');
                // alert('Delete successfully');
            }
            else
            {
                toast.success('Data is not  Deleted')

            }

        } catch (error) {
            toast.error('error');
            console.log("error===", error);
        }
    }
}