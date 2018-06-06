合并行：rowspan="2"
合并列：colspan="2"

<tbody>
    <td>
        <tr rowspan="2">23</tr>
    </td>
</tbody>

表头不动 表身滚动条

```css
    table tbody{
        display:block;
        max-height:400px;
        overflow-y:scroll;
    }

    table thead, table tr {
        display:table;
        width:100%;
        table-layout:fixed;
    }

    table thead {
        width: calc( 100% - 1em )
    }
```