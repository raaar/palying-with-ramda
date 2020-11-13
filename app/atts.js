const R = require('ramda')
const data = require('../data/attachments');
const attachments = R.prop('failedAttachmentDownloads', data) || [];
const getAttachmentIds = R.map(R.prop('attachmentID'))(attachments);

console.log(getAttachmentIds)

