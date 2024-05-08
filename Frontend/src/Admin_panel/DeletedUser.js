import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const DeletedUsersPage = () => {
  const [deletedUsers, setDeletedUsers] = useState([]);

  useEffect(() => {
    const fetchDeletedUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/showDeletedUsers');
        if (response.data && response.data.data && Array.isArray(response.data.data)) {
          setDeletedUsers(response.data.data);
          console.log('Deleted users fetched successfully:', response.data.data);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching deleted users:', error);
      }
    };

    fetchDeletedUsers();
  }, []);

  return (
    <div>
      <h1 style={{textAlign:'center',marginRight:'36px',fontFamily:'Times New Roman'}}>DELETED USERS</h1>
      <TableContainer component={Paper} style={{marginTop:'40px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell  style={{fontFamily:'Times New Roman',fontSize:'25px',color:'maroon'}}>NAME</TableCell>
              <TableCell  style={{fontFamily:'Times New Roman',fontSize:'25px',color:'maroon'}}>PHONE</TableCell>
              <TableCell  style={{fontFamily:'Times New Roman',fontSize:'25px',color:'maroon'}}>EMAIL</TableCell>
              <TableCell  style={{fontFamily:'Times New Roman',fontSize:'25px',color:'maroon'}}>ADDRESS</TableCell>
              <TableCell  style={{fontFamily:'Times New Roman',fontSize:'25px',color:'maroon'}}>ADHARCARD</TableCell>
              <TableCell  style={{fontFamily:'Times New Roman',fontSize:'25px',color:'maroon'}}>PASSWORD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(deletedUsers) &&
              deletedUsers.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.adharcard}</TableCell>
                  <TableCell>{user.password}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DeletedUsersPage;