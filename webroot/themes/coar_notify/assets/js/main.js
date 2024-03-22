$(document).ready(function () {
    $('.sortable-table').DataTable({
        searching: false,
        paging: false,
        info: false,
        ordering: true,
        fixedHeader: true,
        "paging": false,
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        },
        {
            "targets": 'yes-no',
            render: function (data, type, row) {
                if (type === 'display' || type === 'filter') {
                    if (data == 1) {
                        return '<span><img src="/images/icons/yes.png" width="20"/></span>'
                    } else return '<span><img src="/images/icons/no_grey.png" width="20"/></span>';
                }
                return data;
            }
        }]
    });

});

