import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat64 "mo:base/Nat64";
actor{

public type UserRole = {
    prin: Principal;
    Role: Text;
};

var User_Role : [UserRole]=[];

public func CreateUserRole(det : UserRole): async Text{
    User_Role:= Array.append<UserRole>(User_Role, [det]);
    return "OK";
};

public query func DectectUser(prin: Principal):async ?UserRole{
    return Array.find<UserRole>(User_Role, func x=x.prin==prin);
};

public type StdMarks = {
    prin: Principal;
    StdId: Nat64;
    Marks: Nat64;
};

var Std_Marks : [StdMarks]=[];

public func SetStdMarks(det : StdMarks): async Text{
    Std_Marks:= Array.append<StdMarks>(Std_Marks, [det]);
    return "Successfully added";
};

public shared query func getStdMarks(): async [StdMarks]{
    return Std_Marks;
  };




};