export const getTimeS = (nS) => {

    const date =new Date(nS)

    return date.toLocaleDateString().replace(/\//g, "-")+ " " +date.toTimeString().substr(0, 8)
    // new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}

