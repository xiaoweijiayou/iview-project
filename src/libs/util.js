let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'ATS System';
    window.document.title = title;
};

export default util;