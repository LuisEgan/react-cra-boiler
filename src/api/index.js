const dns = "https://www.mydns.com";

const signup = async data => {
    let res;
    try {
        res = await fetch(`${dns}/my/route`, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(data)
        });

        return res;
    } catch (error) {
        console.log(error);
    }
}

export default {
    signup
}



