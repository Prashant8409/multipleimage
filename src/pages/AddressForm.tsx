import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { getProductById, tanzanianRegions } from "@/data/products";

const addressSchema = z.object({
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  mobile2: z.string().optional(),
  region: z.string().min(1, "Please select a region"),
  district: z.string().min(2, "District is required"),
  ward: z.string().min(2, "Ward is required"),
  streetAddress: z.string().min(5, "Street address is required"),
});

type AddressFormData = z.infer<typeof addressSchema>;

const AddressForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const product = id ? getProductById(id) : undefined;

  const [formData, setFormData] = useState<AddressFormData>({
    mobile: "",
    mobile2: "",
    region: "",
    district: "",
    ward: "",
    streetAddress: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AddressFormData, string>>>({});

  const handleInputChange = (field: keyof AddressFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = addressSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof AddressFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof AddressFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    if (product?.purchaseLink) {
      window.open(product.purchaseLink, "_blank");
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header showBackButton onBack={() => navigate("/")} title="Delivery Address" />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        showBackButton
        onBack={() => navigate(`/product/${id}`)}
        title="Type Delivery Address"
      />

      <main className="container py-4 md:py-6 px-4">
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-sm p-4 md:p-6 animate-fade-in">
            {/* Mobile */}
            <div className="mb-4">
              <Label htmlFor="mobile" className="text-foreground font-medium">
                Mobile <span className="text-destructive">*</span>
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="e.g., 0712345678"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                className={errors.mobile ? "border-destructive" : ""}
              />
              {errors.mobile && (
                <p className="text-destructive text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Mobile 2 (Optional) */}
            <div className="mb-4">
              <Label htmlFor="mobile2" className="text-foreground font-medium">
                Mobile 2 <span className="text-muted-foreground">(Optional)</span>
              </Label>
              <Input
                id="mobile2"
                type="tel"
                placeholder="e.g., 0712345678"
                value={formData.mobile2}
                onChange={(e) => handleInputChange("mobile2", e.target.value)}
              />
            </div>

            {/* Region */}
            <div className="mb-4">
              <Label htmlFor="region" className="text-foreground font-medium">
                Region <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.region}
                onValueChange={(value) => handleInputChange("region", value)}
              >
                <SelectTrigger className={errors.region ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  {tanzanianRegions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.region && (
                <p className="text-destructive text-sm mt-1">{errors.region}</p>
              )}
            </div>

            {/* District */}
            <div className="mb-4">
              <Label htmlFor="district" className="text-foreground font-medium">
                District <span className="text-destructive">*</span>
              </Label>
              <Input
                id="district"
                type="text"
                placeholder="Enter district"
                value={formData.district}
                onChange={(e) => handleInputChange("district", e.target.value)}
                className={errors.district ? "border-destructive" : ""}
              />
              {errors.district && (
                <p className="text-destructive text-sm mt-1">{errors.district}</p>
              )}
            </div>

            {/* Ward */}
            <div className="mb-4">
              <Label htmlFor="ward" className="text-foreground font-medium">
                Ward <span className="text-destructive">*</span>
              </Label>
              <Input
                id="ward"
                type="text"
                placeholder="Enter ward"
                value={formData.ward}
                onChange={(e) => handleInputChange("ward", e.target.value)}
                className={errors.ward ? "border-destructive" : ""}
              />
              {errors.ward && (
                <p className="text-destructive text-sm mt-1">{errors.ward}</p>
              )}
            </div>

            {/* Street Address */}
            <div className="mb-6">
              <Label htmlFor="streetAddress" className="text-foreground font-medium">
                Street Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="streetAddress"
                type="text"
                placeholder="Enter street address"
                value={formData.streetAddress}
                onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                className={errors.streetAddress ? "border-destructive" : ""}
              />
              {errors.streetAddress && (
                <p className="text-destructive text-sm mt-1">{errors.streetAddress}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="jiji-btn-buy text-base h-12">
              Purchase on This Address
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddressForm;
