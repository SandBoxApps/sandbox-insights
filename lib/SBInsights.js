

'use strict';

SBInsights.ACTIVE_HOST = 'https://sandboxbackend.herokuapp.com/';


function SBInsights(key) {
    if (!(this instanceof SBInsights)) {
        return new SBInsights(key);
    }

    this._api = {
        auth: null,
        host: SBInsights.ACTIVE_HOST,
        user: null
    };


    this.setApiKey(key);

}


SBInsights.prototype = {
    setApiKey: function (key) {
        if (key) {
            this._setApiField('auth', key);
        }
    },
    _setApiField: function(key, value) {
        this._api[key] = value;
    },
    _setUser: function (id) {
        if (id) {
            this._setApiField('user', id);
        }
    },
    recordPageView: function (pageName) {
        if (typeof pageName !== "string") {
            return false;
        }
        else {
            //do function
            const host = this._api.host + "insightsapp/recordPageView";
            let data = {
                appId: this._api.auth,
                pageName: pageName
            };

            console.log(host);
            console.log(JSON.stringify(data));


            const options = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(data)
            };
            fetch(host, options).then(function(response){
                return response.json();
            }).then(res => {
                console.log(JSON.stringify(res));

            })
            .catch(error => {
                throw(error);
            });
        }
        return true;
    },
    recordEvent: function (category, action) {
        if (typeof category !== "string") {
            return false;
        }
        else if (typeof action !== "string") {
            return false;
        }
        else {
            //do function

            const host = this._api.host + "insightsapp/recordEvent";
            let data = {
                appId: this._api.auth,
                category: category,
                action: action
            };

            console.log(host);
            console.log(JSON.stringify(data));


            const options = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(data)
            };
            fetch(host, options).then(function(response){
                return response.json();
            }).then(res => {
                console.log(JSON.stringify(res));

            })
            .catch(error => {
                throw(error);
            });
        }
        return true;
    },
    recordUser: function(identifier){
        if (typeof identifier !== "string") {
            console.log("Please ensure your identifier is a String.");
            return false;
        }
        else {
            this._setUser(identifier);
            const host = this._api.host + "insightsapp/recordUser";
            let data = {
                appId: this._api.auth,
                identifier: identifier,
                updates: {
                    sessions: true
                }
            };



            const options = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(data)
            };
            fetch(host, options).then(function(response){
                return response.json();
            }).then(res => {
                console.log(JSON.stringify(res));

            })
                .catch(error => {
                    throw(error);
                });
        }

    },
    updateUser: function(id, field, value){
        if (typeof field !== "string") {
            return false;
        }
        else if (typeof value !== "string") {
            return false;
        }
        else if (typeof id !== "string") {
            return false;
        }
        else {
            const host = this._api.host + "insightsapp/recordUser";
            let data = {
                appId: this._api.auth,
                identifier: id,
                updates: {}
            };

            data[field] = value;

            const options = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(data)
            };
            fetch(host, options).then(function(response){
                return response.json();
            }).then(res => {
                console.log(JSON.stringify(res));

            })
                .catch(error => {
                    throw(error);
                });
        }

    },
    _responseHandler: function(req, callback){

    },
    _errorHandler: function(req, callback){

    }

};

module.exports = SBInsights;

module.exports.SBInsights = SBInsights;
