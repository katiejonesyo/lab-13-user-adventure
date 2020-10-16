function scoreFlower(flower) {
    if (flower === 0) {
        return 'poor';   
    }
    else if (flower < 50) {
        return 'modest';   
    }
    return 'rich';
}

export default scoreFlower;