const baseUrl = 'https://api.github.com';

function getRepos() {
    $('#submitBtn').click(function(event) {
        event.preventDefault();
        let userSubmit = $("#userEntry").val();
        let request = `${baseUrl}/users/${userSubmit}/repos`
        console.log(request)
        fetch(request).then((response)=>response.json())
        .then((json)=>{
            console.log(json)
           let html = generateReposHTML(json);
           $('.repos').html(html);
        })
        .catch(err=>console.log(err));
    })
}

function generateReposHTML(repo) {
    let reposHTML = [];
    for(let i = 0; i < repo.length; i++) {
        let {name, html_url, created_at} = repo[i];
        let date = new Date(created_at);
        reposHTML.push(`
        <div id="returnInfo">
            <div>${name}</div>
            <a href="${html_url}">${html_url}</a>
            <div>${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</div>
        </div>
        <br>
        `)
    }
    return reposHTML.join('');
}

function main() {
getRepos();

}

$(main);