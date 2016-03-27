var nodeUuid = require('node-uuid');
var clipboard = require('copy-paste');
var extend = require('util')._extend;

/**
 * Extensions for node-uuid object. This module will only
 * use the node-uuid wtih extensions for consistency.
 */
var extension = {
  empty: function() {
    return '00000000-0000-0000-0000-000000000000';
  }
};

// The node-uuid with extensions
var uuid = extend(nodeUuid, extension);

module.exports = {
  
  /**
   * Copy new UUID to clipboard
   */
  newUUID: function() {
    clipboard.copy(uuid.v4());
  },

  /**
   * Copy new empty UUID to clipboard
   */
  emptyUUID: function() {
    clipboard.copy(uuid.empty());
  }
};
