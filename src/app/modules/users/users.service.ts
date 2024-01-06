import { IUser } from './users.interface';
import User from './users.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  console.log(payload);
  const user = new User(payload);
  // const user=new User({
  //     id:'1111',
  //     role:'student',
  //     password:'22222',
  //     name:{
  //       firstName:'md',
  //       middleName:'abul',
  //       lastName:'kashem'
  //     },
  //     dateOfBirth:'31 july',
  //     gender:'male',
  //     email:'abcd@gmail.com',
  //     contactNo:'33333',
  //     emergencyContactNo:'33333',
  //     presentAddress:'nandipara',
  //     permanentAddress:'nandipara'
  //   });

  await user.save();
  return user;
};

export const getUsersFromDb = async () => {
  const users = await User.find();
  return users;
};

export const getLoginUserFromDb = async (payload: string) => {
  const email = payload;
  try {
    const user = await User.findOne({ email: email.toLocaleLowerCase() });

    if (user) {
      const token = jwt.sign(
        {
          firstName: user.firstName,
        },
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: '1h',
        },
      );
      return token;
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user from database:', error);
    throw error;
  }
};

export const updateUserToDb = async (payload: {
  email: string;
  lastName: string;
}) => {
  try {
    const { email, lastName } = payload;

    const user = await User.findOneAndUpdate(
      { email },
      { lastName },
      { new: true },
    );

    if (user) {
      console.log('User updated successfully:', user);
      return user;
    } else {
      console.log('User not found');
      return null;
    }
  } catch (error) {
    console.error('Error updating user in the database:', error);
    throw error;
  }
};

export const deleteUserToDb = async (payload: string) => {
  try {
    const email = payload;

    const result = await User.deleteOne({ email });

    if (result.deletedCount === 1) {
      console.log('User deleted successfully');
      return result;
    } else {
      console.log('User not found or deletion unsuccessful');
      return false;
    }
  } catch (error) {
    console.error('Error deleting user from the database:', error);
    throw error;
  }
};
