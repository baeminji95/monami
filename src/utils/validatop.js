// 유효성 검사
export function isName(name) {
    const patt = /^[가-힣]/;

    if(name.match(patt)) {
        return true;
    };

    return false;
};

export function isEmail(email) {
    const patt = /[a-z0-9._%+\]+@[a-z0-9.\-]+\.[a-z]{2,}$/;

    if(email.match(patt)) {
        return true;
    }
    return false;
}

export function isNum(num) {
    const patt = /^[0-9]/;
    
    if(num.match(patt) && num.trim().length === 11) {
        return true;
    };
    return false;
}
