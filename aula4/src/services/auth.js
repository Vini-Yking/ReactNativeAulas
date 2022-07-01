const login = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: {
                    name: "Vinicios",
                    email: "vini@gmail.com",
                    password: "123456"
                },
                token: "saiudbfuisdhfiushdfiuahsdfiuhsadifuhsaidufhiausdfhiuasfiuahfd",
            });
        }, 2000)
    })
}
export default login