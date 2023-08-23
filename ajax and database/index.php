<?php

//$getText=$_REQUEST['q'];
//echo "you are write ".$getText;

$getText=$_REQUEST['q'];
$con=new mysqli('localhost','root','','test');
$sql="SELECT * FROM users WHERE last_name ='$getText'";
$query=$con->query($sql);

if($query->num_rows>0)
{
    $row=$query->fetch_assoc();
    $user_first_id=$row['user_id'];
    $user_first_name=$row['first_name'];
    $user_last_name=$row['last_name'];
    $user_email=$row['email'];
    echo "<h3 class='text-center text-success mt-2'>User Information</h3>
<table class='table bg-warning'>
<thead>
<tr class='mx-auto'>
    <th class='flex-md-row-reverse'>User Id</th>
    <th class='me-2 p-2'>First Name</th>
    <th class='me-2 p-2'>Last Name</th>
    <th class='me-2'>Email</th>
</tr>
</thead>
    <tboday>
    <tr>
        <td>$user_first_id</td>
        <td>$user_first_name</td>
        <td>$user_last_name</td>
        <td>$user_email</td>
    </tr>
</tboday>
</table>";

}
else{
echo "Data not found";
}