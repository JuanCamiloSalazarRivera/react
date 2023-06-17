const user = {
    name: 'Juan Diaz',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/000/379/094/original/edit-profile-vector-icon.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl} 
        alt={'Photo of ' + user.name}
        style={{
            width: user.imageSize,
            height: user.imageSize
        }}
        />
        </>
    );
}