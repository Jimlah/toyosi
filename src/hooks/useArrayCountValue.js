const useArrayCountValue = (arr) => {

    const counts = [];

    for (const iterator of arr) {
        const key = iterator.name;

        if (counts[key]) {
            counts[key].count += 1;
        } else {
            counts[key] = {
                count: 1,
                item: iterator
            }
        }
    }
    return counts;
}

export default useArrayCountValue;