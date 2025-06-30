
export const validateBook = ({title,author,condition,price,description,category}) => {
    if(!title || !author || !condition || !price || !description || !category){
        throw new Error("All fields are required")
    }
    return true;
}