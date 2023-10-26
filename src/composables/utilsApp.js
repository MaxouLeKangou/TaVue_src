import PocketBase from 'pocketbase'
const pb = new PocketBase("http://127.0.0.1:8090/");

const getPicture = async () => {
    if(pb.authStore.isValid) {
        let result = await pb.collection('users').getOne(pb.authStore.model.id)
        var id = result.id
        var avatar = result.avatar
    
        if(avatar) {
            document.getElementById("userAvatar").src = `http://127.0.0.1:8090/api/files/users/${id}/${avatar}`;
        } else {
            document.getElementById("userAvatar").src = "/images/avatar.jpg";
        }
    }
}

export default getPicture;