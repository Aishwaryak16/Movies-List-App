export const checkValidData = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);



    if (!emailRegex) return 'Email Id is not valid';

    if (!passRegex) return 'password is not valid';



    return null;
}