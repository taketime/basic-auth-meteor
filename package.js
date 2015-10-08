Package.describe({
    name: 'taketime:basic-auth',
    version: '0.0.1',
    summary: 'Basic auth for Meteor',
    git: 'https://github.com/taketime/basic-auth-meteor',
    documentation: 'README.md'
});

Npm.depends({ "basic-auth": "1.0.3" });

Package.onUse(function(api) {
    api.addFiles('basic_auth.js', 'server');
});
