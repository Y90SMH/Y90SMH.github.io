function fetchJSONFile(path, callback) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) { var data = JSON.parse(httpRequest.responseText); if (callback) callback(data); }
		}
	};
	httpRequest.open('GET', path);
	httpRequest.send();
}

var AchievementsBox = React.createClass({
	componentDidMount: function() {
		this.loadContentFromServer();
		//setInterval(this.loadContentFromServer, this.props.pollInterval);
	},
	getInitialState: function() { return {data: []}; },
	loadContentFromServer: function() { fetchJSONFile(this.props.url, function(data){this.setState({data: data});}.bind(this)); },
	render: function() { return ( <Achievements data={this.state.data} /> ); }
});
var Achievements = React.createClass({
	render: function() {
		var nodes = this.props.data.map(function (achievement) { return ( <Achievement month={achievement.month} text={achievement.text} year={achievement.year} /> ); });
		return ( <ul>{nodes}</ul> );
	}
});
var Achievement = React.createClass({ render: function() { return ( <li>{this.props.month}, {this.props.year} &ndash; {this.props.text}</li> ); } });

React.render(
	<AchievementsBox url="json/achievements.json" />,
	document.getElementById('achievements')
);

var ArticlesBox = React.createClass({
	componentDidMount: function() {
		this.loadContentFromServer();
		//setInterval(this.loadContentFromServer, this.props.pollInterval);
	},
	getInitialState: function() { return {data: []}; },
	loadContentFromServer: function() { fetchJSONFile(this.props.url, function(data){this.setState({data: data});}.bind(this)); },
	render: function() { return ( <Articles data={this.state.data} /> ); }
});
var Articles = React.createClass({
	render: function() {
		var nodes = this.props.data.map(function (article) {return (<Article author={article.author} href={article.href} text={article.text} />);});
		return ( <ul>{nodes}</ul> );
	}
});
var Article = React.createClass({ render: function() { return ( <li><a href={this.props.href} target="_blank" title={"Article by " + this.props.author}>{this.props.text}</a></li> ); } });

React.render(
	<ArticlesBox url="json/articles.json" />,
	document.getElementById('articles')
);

var RepositoriesBox = React.createClass({
	componentDidMount: function() {
		this.loadContentFromServer();
		//setInterval(this.loadContentFromServer, this.props.pollInterval);
	},
	getInitialState: function() { return {data: []}; },
	loadContentFromServer: function() { fetchJSONFile(this.props.url, function(data){this.setState({data: data});}.bind(this)); },
	render: function() { return ( <Repositories data={this.state.data} /> ); }
});
var Repositories = React.createClass({
	render: function() {
		var nodes = this.props.data.map(function (repo) {return (<Repo name={repo.name} html_url={repo.html_url} />);});
		return ( <ul>{nodes}</ul> );
	}
});
var Repo = React.createClass({ render: function() { return ( <li><a href={this.props.html_url} target="_blank">{this.props.name}</a></li> ); } });

React.render(
	<RepositoriesBox url="https://api.github.com/users/Y90SMH/repos" />,
	document.getElementById('repositories')
);