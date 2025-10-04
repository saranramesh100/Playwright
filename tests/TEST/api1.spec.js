const {test,expect}=require('@playwright/test')

var userid;
test('GET USER', async({request})=>{
   const response=await request.get('https://reqres.in/api/users?page=2')
   console.log(await response.json())
   expect(response.status()).toBe(200)
})

test('CREATE USER', async({request})=>{
    const response=await request.post('https://reqres.in/api/users',
        {
            data:{"name": "morpheus","job": "zion resident"}, 
            headers:{"Accept":"application/json"}
        })
    console.log(await response.json())
    expect(response.status()).toBe(201)
     var res=await response.json()
     userid=res.id     
 })
 test('UPDATE USER', async({request})=>{
    const response=await request.put('https://reqres.in/api/users/2'+ userid,
        {
            data:{"name": "morpheus","job": "ENGINEER"}, 
            headers:{"Accept":"application/json"
            }
        })
    console.log(await response.json())
    expect(response.status()).toBe(200)
 })
 test('DELETE USER', async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/2'+ userid,)
    expect(response.status()).toBe(204)
 }) 