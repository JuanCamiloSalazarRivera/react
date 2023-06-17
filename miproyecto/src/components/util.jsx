export function getImagUrl(person, size = 's') {
    return (
        'https://th.bing.com/th/id/R.c6d319b09eae202690d79a1b0eb486d8?rik=sTz3Cmc%2boK77yw&riu=http%3a%2f%2ftecache.cl%2fwp-content%2fuploads%2f2015%2f08%2fla-roca.jpg&ehk=p9EPVK0s9ulV5PdfqmcwYFAFqvozbj3bLVY4jv4E5Vo%3d&risl=&pid=ImgRaw&r=0' +
        person.imageId +
        size +
        '.jpg'
    );
}