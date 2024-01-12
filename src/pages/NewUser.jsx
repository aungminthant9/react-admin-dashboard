const NewUser = () => {
    return ( 
        <div className="flex-[4]">
            <h1 className="text-[25px] font-bold text-[teal]">New User</h1>
            <form className="grid grid-cols-2">
                <div className="newUserItem">
                   <label>User Name</label>
                   <input type="text" placeholder="Jones"
                          className=""/>
                </div>

                <div className="newUserItem">
                   <label>Full Name</label>
                   <input type="text" placeholder="Jones Blake"
                          className=""/>
                </div>

                <div className="newUserItem">
                   <label>Email</label>
                   <input type="email" placeholder="jones@gmail.com"
                          className=""/>
                </div>
                
                <div className="newUserItem">
                   <label>Password</label>
                   <input type="password" placeholder="password"
                          className=""/>
                </div>

                <div className="newUserItem">
                   <label>Phone</label>
                   <input type="text" placeholder="+9 234 034 03"
                          className=""/>
                </div>

                <div className="newUserItem">
                   <label>Address</label>
                   <input type="text" placeholder="New York | USA"
                          className=""/>
                </div>
                
                <div className="newUserItem">
                   <label>Gender</label>
                   <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value='male'/>
                        <label htmlFor="male">Male</label>

                        <input type="radio" name="gender" id="female" value='female'/>
                        <label htmlFor="female">Female</label>
                   </div>
                </div>
                <div className="flex flex-col">
                      <label className="mt-[10px] text-[14px] font-semibold text-gray-400">Active</label>
                      <select className="newUserSelect" name="active" id="active">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                      </select>
                </div>
                <button className="w-[200px] h-[40px] bg-orange-700 text-white py-[7px] px-[10px] font-semibold rounded-[10px] cursor-pointer">Create</button>
            </form>
        </div>
     );
}
 
export default NewUser;