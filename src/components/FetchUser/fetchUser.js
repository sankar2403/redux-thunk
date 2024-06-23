import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserList } from '../../redux/Action.js';

const FetchUser = () => {
    const dispatch = useDispatch();
    const userlist = useSelector(state => state.userlist);

    useEffect(() => {
        dispatch(fetchUserList());
    }, [dispatch]);

    return userlist.loading ? (
        <h2>Loading...</h2>
    ) : userlist.error ? (
        <h2>{userlist.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            {
                userlist.data && userlist.data.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </div>
    );
};

export default FetchUser;
