/*
 * Copyright (c) 2008-2022, Hazelcast, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//
// Autogenerated by Thrift Compiler (0.15.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
/* eslint-disable */
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
ttypes.Lang = {
  'JAVASCRIPT' : 1,
  'GROOVY' : 2,
  'PYTHON' : 3,
  'RUBY' : 4
};
var Cluster = module.exports.Cluster = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
Cluster.prototype = {};
Cluster.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.id = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Cluster.prototype.write = function(output) {
  output.writeStructBegin('Cluster');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CloudCluster = module.exports.CloudCluster = function(args) {
  this.id = null;
  this.name = null;
  this.nameForConnect = null;
  this.hazelcastVersion = null;
  this.isTlsEnabled = null;
  this.state = null;
  this.token = null;
  this.certificatePath = null;
  this.tlsPassword = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.nameForConnect !== undefined && args.nameForConnect !== null) {
      this.nameForConnect = args.nameForConnect;
    }
    if (args.hazelcastVersion !== undefined && args.hazelcastVersion !== null) {
      this.hazelcastVersion = args.hazelcastVersion;
    }
    if (args.isTlsEnabled !== undefined && args.isTlsEnabled !== null) {
      this.isTlsEnabled = args.isTlsEnabled;
    }
    if (args.state !== undefined && args.state !== null) {
      this.state = args.state;
    }
    if (args.token !== undefined && args.token !== null) {
      this.token = args.token;
    }
    if (args.certificatePath !== undefined && args.certificatePath !== null) {
      this.certificatePath = args.certificatePath;
    }
    if (args.tlsPassword !== undefined && args.tlsPassword !== null) {
      this.tlsPassword = args.tlsPassword;
    }
  }
};
CloudCluster.prototype = {};
CloudCluster.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.id = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.name = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.nameForConnect = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.STRING) {
          this.hazelcastVersion = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 5:
        if (ftype == Thrift.Type.BOOL) {
          this.isTlsEnabled = input.readBool();
        } else {
          input.skip(ftype);
        }
        break;
      case 6:
        if (ftype == Thrift.Type.STRING) {
          this.state = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 7:
        if (ftype == Thrift.Type.STRING) {
          this.token = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 8:
        if (ftype == Thrift.Type.STRING) {
          this.certificatePath = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 9:
        if (ftype == Thrift.Type.STRING) {
          this.tlsPassword = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CloudCluster.prototype.write = function(output) {
  output.writeStructBegin('CloudCluster');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.nameForConnect !== null && this.nameForConnect !== undefined) {
    output.writeFieldBegin('nameForConnect', Thrift.Type.STRING, 3);
    output.writeString(this.nameForConnect);
    output.writeFieldEnd();
  }
  if (this.hazelcastVersion !== null && this.hazelcastVersion !== undefined) {
    output.writeFieldBegin('hazelcastVersion', Thrift.Type.STRING, 4);
    output.writeString(this.hazelcastVersion);
    output.writeFieldEnd();
  }
  if (this.isTlsEnabled !== null && this.isTlsEnabled !== undefined) {
    output.writeFieldBegin('isTlsEnabled', Thrift.Type.BOOL, 5);
    output.writeBool(this.isTlsEnabled);
    output.writeFieldEnd();
  }
  if (this.state !== null && this.state !== undefined) {
    output.writeFieldBegin('state', Thrift.Type.STRING, 6);
    output.writeString(this.state);
    output.writeFieldEnd();
  }
  if (this.token !== null && this.token !== undefined) {
    output.writeFieldBegin('token', Thrift.Type.STRING, 7);
    output.writeString(this.token);
    output.writeFieldEnd();
  }
  if (this.certificatePath !== null && this.certificatePath !== undefined) {
    output.writeFieldBegin('certificatePath', Thrift.Type.STRING, 8);
    output.writeString(this.certificatePath);
    output.writeFieldEnd();
  }
  if (this.tlsPassword !== null && this.tlsPassword !== undefined) {
    output.writeFieldBegin('tlsPassword', Thrift.Type.STRING, 9);
    output.writeString(this.tlsPassword);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Member = module.exports.Member = function(args) {
  this.uuid = null;
  this.host = null;
  this.port = null;
  if (args) {
    if (args.uuid !== undefined && args.uuid !== null) {
      this.uuid = args.uuid;
    }
    if (args.host !== undefined && args.host !== null) {
      this.host = args.host;
    }
    if (args.port !== undefined && args.port !== null) {
      this.port = args.port;
    }
  }
};
Member.prototype = {};
Member.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.uuid = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.host = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.I32) {
          this.port = input.readI32();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Member.prototype.write = function(output) {
  output.writeStructBegin('Member');
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 1);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.host !== null && this.host !== undefined) {
    output.writeFieldBegin('host', Thrift.Type.STRING, 2);
    output.writeString(this.host);
    output.writeFieldEnd();
  }
  if (this.port !== null && this.port !== undefined) {
    output.writeFieldBegin('port', Thrift.Type.I32, 3);
    output.writeI32(this.port);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Response = module.exports.Response = function(args) {
  this.success = null;
  this.message = null;
  this.result = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
    if (args.result !== undefined && args.result !== null) {
      this.result = args.result;
    }
  }
};
Response.prototype = {};
Response.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.BOOL) {
          this.success = input.readBool();
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.result = input.readBinary();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Response.prototype.write = function(output) {
  output.writeStructBegin('Response');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 1);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.result !== null && this.result !== undefined) {
    output.writeFieldBegin('result', Thrift.Type.STRING, 3);
    output.writeBinary(this.result);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ServerException = module.exports.ServerException = function(args) {
  Thrift.TException.call(this, "ServerException");
  this.name = "ServerException";
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(ServerException, Thrift.TException);
ServerException.prototype.name = 'ServerException';
ServerException.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ServerException.prototype.write = function(output) {
  output.writeStructBegin('ServerException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CloudException = module.exports.CloudException = function(args) {
  Thrift.TException.call(this, "CloudException");
  this.name = "CloudException";
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(CloudException, Thrift.TException);
CloudException.prototype.name = 'CloudException';
CloudException.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString();
        } else {
          input.skip(ftype);
        }
        break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CloudException.prototype.write = function(output) {
  output.writeStructBegin('CloudException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
